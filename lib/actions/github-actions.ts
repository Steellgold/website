"use server";

export type GitHubStats = {
  stars: number;
  createdAt: string;
  lastCommitDate: string;
  forks: number;
};

export async function getGitHubStats(githubUrl: string): Promise<GitHubStats | null> {
  try {
    // Extract owner and repo from GitHub URL
    const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) return null;

    const [, owner, repo] = match;
    const repoName = repo.replace(/\.git$/, '');

    // Fetch repository info
    const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!repoResponse.ok) return null;

    const repoData = await repoResponse.json();

    // Fetch latest commit
    const commitsResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}/commits?per_page=1`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
          })
        },
        next: { revalidate: 3600 }
      }
    );

    let lastCommitDate = repoData.updated_at;
    if (commitsResponse.ok) {
      const commits = await commitsResponse.json();
      if (commits.length > 0) {
        lastCommitDate = commits[0].commit.committer.date;
      }
    }

    return {
      stars: repoData.stargazers_count,
      createdAt: repoData.created_at,
      lastCommitDate,
      forks: repoData.forks_count
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
}
