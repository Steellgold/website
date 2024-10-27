const getTileColor = (value: number) => {
  switch (value) {
    case 2: return "bg-[#FFF7E1] text-[#333333] dark:bg-[#FFF1CC] dark:text-[#333333]";
    case 4: return "bg-[#FFEBB2] text-[#333333] dark:bg-[#FFE39A] dark:text-[#333333]";
    case 8: return "bg-[#FFD580] text-[#FFFFFF] dark:bg-[#FFC266] dark:text-[#333333]";
    case 16: return "bg-[#FFA347] text-[#FFFFFF] dark:bg-[#FF9440]";
    case 32: return "bg-[#FF7033] text-[#FFFFFF] dark:bg-[#FF5933]";
    case 64: return "bg-[#FF3B1D] text-[#FFFFFF] dark:bg-[#FF5233]";
    case 128: return "bg-[#FFC857] text-[#FFFFFF] dark:bg-[#FFB847]";
    case 256: return "bg-[#FFB100] text-[#FFFFFF] dark:bg-[#FFA100]";
    case 512: return "bg-[#FF9A00] text-[#FFFFFF] dark:bg-[#FF8A00]";
    case 1024: return "bg-[#FF8500] text-[#FFFFFF] dark:bg-[#FF7700]";
    case 2048: return "bg-[#FF7F00] text-[#FFFFFF] dark:bg-[#FF6F00] dark:text-[#333333]";
    case 4096: return "bg-[#E67E22] text-[#FFFFFF] dark:bg-[#D16B1A] dark:text-[#333333]";
    case 8192: return "bg-[#D35400] text-[#F2F2F2] dark:bg-[#331700]"; // Well, I don't think I need to keep adding color.
    case 16384: return "bg-[#C0392B] text-[#F2F2F2] dark:bg-[#290C0C]"; // But for sure this one 
    case 32768: return "bg-[#A93226] text-[#F2F2F2] dark:bg-[#1C0000]"; // And this one.. but I'm not sure about the next one.
    case 65536: return "bg-[#922B21] text-[#F2F2F2] dark:bg-[#100000]"; // I'm really not sure about the next one.
    case 131072: return "bg-[#7B241C] text-[#F2F2F2] dark:bg-[#050000]"; // Uhm, I think I should stop now.
    case 262144: return "bg-[#641E16] text-[#F2F2F2] dark:bg-[#000000]"; // Is it at least possible to get there?
    case 524288: return "bg-[#510000] text-[#F2F2F2] dark:bg-[#000000]";  // I don't know, but for sure I won't get there.
    case 1048576: return "bg-[#3E0000] text-[#F2F2F2] dark:bg-[#000000]"; // I'm not that good at this game.
    default: return "bg-[#ece9dc] dark:bg-[#272f3b]";
  }
};

export { getTileColor };