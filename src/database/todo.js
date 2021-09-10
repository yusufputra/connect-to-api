// Fungsi untuk menyimpan daftar `todos` ke dalam local storage.
export function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
