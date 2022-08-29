<script lang="ts">
  export let isMultiple: boolean = false;
  export let label: string = "Choose an image for the article banner, by clicking or dragging a file here";
</script>

<div class="file-drop-area">
  <span class="file-msg">{label}</span>
  <input class="file-input" type="file" multiple={isMultiple} />
</div>

<style lang="scss">
.file-drop-area {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 100px;
  padding: 25px;
  border: 1px dashed rgba(255, 255, 255, 0.4);
  border-radius: 3px;
  transition: 0.2s;
}

.file-msg {
  font-size: small;
  font-weight: 300;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-input {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  &:focus {
    outline: none;
  }
}
</style>