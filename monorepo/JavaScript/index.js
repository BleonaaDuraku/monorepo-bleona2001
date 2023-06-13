function shuffleValues() {
    var checkboxes = document.getElementsByClassName('checkbox-item');
    var checkboxesArray = Array.from(checkboxes);
    checkboxesArray.sort(() => Math.random() - 0.5);
    checkboxesArray.forEach((checkbox, index) => {
      checkbox.parentNode.appendChild(checkbox);
    });
}

function changeValues() {
    var checkboxes = document.getElementsByName('checkbox');
    console.log(checkboxes)
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = !checkboxes[i].checked
    }
  }


function showSelectedValues() {
    var checkboxes = document.getElementsByName('checkbox');
    var selectedValues = [];

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          selectedValues.push(checkbox.value);
        }
      });

    var output = document.getElementById('output');
    output.innerHTML = 'Selected Values are: ' + selectedValues.join(', ');
  }

 