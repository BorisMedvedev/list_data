//база данных
const listData = [
  {
    name: "Борис",
    sureName: "Николаевич",
    lastName: "Медведев",
    age: 44,
    hobby: "IT",
  },
  {
    name: "Максим",
    sureName: "Борисович",
    lastName: "Медведев",
    age: 11,
    hobby: "Телефон",
  },
  {
    name: "Кирилл",
    sureName: "Борисович",
    lastName: "Медведев",
    age: 17,
    hobby: "Спорт",
  },
  {
    name: "Арина",
    sureName: "Борисовна",
    lastName: "Медведева",
    age: 9,
    hobby: "Танцы",
  },
];

// создание элементов ==================================
const $app = document.getElementById("app");

const $table = document.createElement("table");
const $tabeHead = document.createElement("thead");
const $tableBody = document.createElement("tbody");

const $tabeHeadTr = document.createElement("tr");
const $tabeHeadThFio = document.createElement("th");
const $tabeHeadThAge = document.createElement("th");
const $tabeHeadThYearBirth = document.createElement("th");
const $tabeHeadThHobby = document.createElement("th");

$table.classList.add("table", "table-dark", "table-striped", "prohibition");

$tabeHeadThFio.textContent = "ФИО";
$tabeHeadThAge.textContent = "Возраст";
$tabeHeadThYearBirth.textContent = "Год рождения";
$tabeHeadThHobby.textContent = "Хобби";

$tabeHeadTr.append(
  $tabeHeadThFio,
  $tabeHeadThAge,
  $tabeHeadThYearBirth,
  $tabeHeadThHobby
);

$tabeHead.append($tabeHeadTr);
$table.append($tabeHead, $tableBody);
$app.append($table);

const $addForm = document.createElement("form");
const $addInputName = document.createElement("input");
const $addInputSureName = document.createElement("input");
const $addInputLastName = document.createElement("input");
const $addInputAge = document.createElement("input");
const $addInputYearBirth = document.createElement("input");
const $addInputHobby = document.createElement("input");
const $addBtn = document.createElement("button");

$addBtn.textContent = "Добавить";
$addBtn.classList.add("btn", "btn-primary");

$addForm.classList.add("mb-3");
$addInputName.classList.add("form-control", "mb-3");
$addInputSureName.classList.add("form-control", "mb-3");
$addInputLastName.classList.add("form-control", "mb-3");
$addInputAge.classList.add("form-control", "mb-3");
$addInputYearBirth.classList.add("form-control", "mb-3");
$addInputHobby.classList.add("form-control", "mb-3");

$addInputName.placeholder = "введите имя";
$addInputSureName.placeholder = "введите фамилию";
$addInputLastName.placeholder = "введите отчество";
$addInputAge.placeholder = "введите возраст";
$addInputYearBirth.placeholder = "введите год рождения";
$addInputHobby.placeholder = "введите ваше хобби";

$addForm.append(
  $addInputName,
  $addInputSureName,
  $addInputLastName,
  $addInputAge,
  $addInputYearBirth,
  $addInputHobby,
  $addBtn
);
$app.prepend($addForm);

let newListData = [...listData];

// Рендер - Ререндер ======================================================
function rerender(arrData) {
  $tableBody.innerHTML = "";
  // Подготовка
  for (const oneUser of arrData) {
    oneUser.fio =
      oneUser.name + " " + oneUser.sureName + " " + oneUser.lastName;
    oneUser.yearBirth = new Date().getFullYear() - oneUser.age;
  }
  // Отрисовка

  for (const oneUser of arrData) {
    const $userTr = document.createElement("tr");
    const $userThFio = document.createElement("th");
    const $userThAge = document.createElement("th");
    const $userThYearBirth = document.createElement("th");
    const $userThHobby = document.createElement("th");

    $userThFio.textContent = oneUser.fio;
    $userThAge.textContent = oneUser.age;
    $userThYearBirth.textContent = oneUser.yearBirth;
    $userThHobby.textContent = oneUser.hobby;

    $userTr.append($userThFio, $userThAge, $userThYearBirth, $userThHobby);
    $tableBody.append($userTr);
  }
}
rerender(newListData);

//Добавление
$addForm.addEventListener("submit", (el) => {
  el.preventDefault();
  newListData.push({
    name: $addInputName.value.trim(),
    sureName: $addInputSureName.value.trim(),
    lastName: $addInputLastName.value.trim(),
    age: parseInt($addInputAge.value.trim()),
    hobby: $addInputHobby.value.trim(),
  });
  rerender(newListData);
});
