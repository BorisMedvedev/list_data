//база данных
let listData = [
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
    name: "шрина",
    sureName: "Борисовна",
    lastName: "Медведева",
    age: 9,
    hobby: "Танцы",
  },
];

let sortColumnFlag = "age";
let sortDirFlag = true;

let newListData = [...listData];

// создание элементов ==================================
const $app = document.getElementById("app");
const $sortFioBtn = document.getElementById("sort-fio");
const $sortAgeBtn = document.getElementById("sort-age");

const $table = document.createElement("table");
const $tabeHead = document.createElement("thead");
const $tableBody = document.createElement("tbody");

const $tabeHeadTr = document.createElement("tr");
const $tabeHeadThFio = document.createElement("th");
const $tabeHeadThAge = document.createElement("th");
const $tabeHeadThYearBirth = document.createElement("th");
const $tabeHeadThHobby = document.createElement("th");

$table.classList.add(
  "table",
  "table-dark",
  "table-striped",
  "prohibition",
  "hobby-th"
);

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
const $addInputHobby = document.createElement("input");
const $addBtn = document.createElement("button");

$addBtn.textContent = "Добавить данные в список";
$addBtn.classList.add("btn", "btn-primary");

$addForm.classList.add("mb-3");
$addInputName.classList.add("form-control", "mb-3");
$addInputSureName.classList.add("form-control", "mb-3");
$addInputLastName.classList.add("form-control", "mb-3");
$addInputAge.classList.add("form-control", "mb-3");
$addInputHobby.classList.add("form-control", "mb-3");

$addInputName.placeholder = "введите имя*";
$addInputSureName.placeholder = "введите фамилию*";
$addInputLastName.placeholder = "введите отчество*";
$addInputAge.placeholder = "введите возраст*";
$addInputHobby.placeholder = "введите ваше хобби";

$addInputAge.type = "number";

$addForm.append(
  $addInputName,
  $addInputSureName,
  $addInputLastName,
  $addInputAge,
  $addInputHobby,
  $addBtn
);
$app.prepend($addForm);

function createUserTr(oneUser) {
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

  return $userTr;
}

// Рендер - Ререндер ======================================================

function rerender(arrData) {
  $tableBody.innerHTML = "";

  // Подготовка
  for (const oneUser of arrData) {
    oneUser.hobby;
    oneUser.fio =
      oneUser.name + " " + oneUser.sureName + " " + oneUser.lastName;
    oneUser.yearBirth = new Date().getFullYear() - oneUser.age;
  }

  //Сортировка
  newListData = newListData.sort(function (a, b) {
    let sort = a[sortColumnFlag] < b[sortColumnFlag];

    if (sortDirFlag === false) {
      a[sortColumnFlag] > b[sortColumnFlag];
    }

    if (sort) {
      return -1;
    }
  });

  // Отрисовка

  for (const oneUser of arrData) {
    const $newUser = createUserTr(oneUser);
    $tableBody.append($newUser);
  }
}
rerender(newListData);

//Добавление
$addForm.addEventListener("submit", (el) => {
  el.preventDefault();

  if ($addInputName.value.trim() === "") {
    alert("Имя не введено!");
    return;
  }

  if ($addInputSureName.value.trim() === "") {
    alert("ФИO не введено!");
    return;
  }
  if ($addInputLastName.value.trim() === "") {
    alert("Отчeство не введено!");
    return;
  }
  if ($addInputAge.value.trim() === "") {
    alert("Возраст не введен!");
    return;
  }

  newListData.push({
    name: $addInputName.value.trim(),
    sureName: $addInputSureName.value.trim(),
    lastName: $addInputLastName.value.trim(),
    age: parseInt($addInputAge.value.trim()),
    hobby: $addInputHobby.value.trim(),
  });
  rerender(newListData);
});

$sortFioBtn.addEventListener("click", () => {
  sortColumnFlag = "fio";
  sortDirFlag = !sortDirFlag;
  rerender(newListData);
});
$sortAgeBtn.addEventListener("click", () => {
  sortColumnFlag = "age";
  sortDirFlag = !sortDirFlag;
  rerender(newListData);
});
