
window.onload = function () {
    
    const imageChoose = document.getElementById('fileInput');

    imageChoose.addEventListener('change', function (e) {
        document.forms["image-form"].submit();
     }, false);

}

function dropHandler(ev) {

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        [...ev.dataTransfer.items].forEach((item, i) => {
          // If dropped items aren't files, reject them
          if (item.kind === 'file') {

            const image = item.getAsFile();
    



          }
        });
    }

}

function dragOverHandler(ev) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}
