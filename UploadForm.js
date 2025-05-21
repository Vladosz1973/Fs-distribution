
import React from "react";
function UploadForm() {
  return (
    <div>
      <h2>Загрузить трек</h2>
      <form>
        <input type="text" placeholder="Название трека" />
        <input type="file" accept="audio/*" />
        <input type="file" accept="image/*" />
        <textarea placeholder="Описание"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
export default UploadForm;
