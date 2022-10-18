const photoBtn = document.querySelector(".photo-btn")
const photo = document.querySelector(".photo img")

function showPhoto() {
  photo.className = ""
  photoBtn.removeEventListener("click", showPhoto)
  photoBtn.addEventListener("click", hidePhoto)
  photoBtn.textContent = "Скрыть фото"
}

function hidePhoto() {
  photo.className = "photo-hidden"
  photoBtn.removeEventListener("click", hidePhoto)
  photoBtn.addEventListener("click", showPhoto)
  photoBtn.textContent = "Показать фото"
}

photoBtn.addEventListener("click", hidePhoto)

const dialog = document.querySelector("dialog")
const closeDialog = () => {
  dialog.close()
  window.removeEventListener("click", closeDialog)
}
