class DataStore {
  static buttonACount = 0;
  static buttonBCount = 0;
}

function buttonAAction() {
  DataStore.buttonACount += 1;
  onPageUpdate();
}

function buttonBAction() {
  DataStore.buttonBCount += 1;
  onPageUpdate();
}

function onPageUpdate() {
  document.getElementById('button-a-count').innerHTML =
    `Button A count: ${DataStore.buttonACount}`;

  document.getElementById('button-b-count').innerHTML =
    `Button B count: ${DataStore.buttonBCount}`;
}

onPageUpdate();
