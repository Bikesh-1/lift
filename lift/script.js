document.addEventListener('DOMContentLoaded', () => {
  const floors = document.querySelectorAll('.floor1');
  const lift = document.querySelector('.lift');
  const leftDoor = document.querySelector('.leftdoor');
  const rightDoor = document.querySelector('.rightdoor');

  floors.forEach((floor, index) => {
    const upButton = floor.querySelector('.up');
    const downButton = floor.querySelector('.down');

    if (upButton) {
      upButton.addEventListener('click', () => {
        moveToFloor(index);
      });
    }

    if (downButton) {
      downButton.addEventListener('click', () => {
        moveToFloor(index);
      });
    }
  });

  function moveToFloor(floorIndex) {
    const liftHeight = 193;
    const newPosition = (floors.length - floorIndex - 1) * liftHeight;

    // Move the lift
    lift.style.transition = 'bottom 2s';
    lift.style.bottom = `${newPosition}px`;

    // Open doors when lift reaches the floor
    setTimeout(() => {
      openDoors();
    }, 2000);

    // Close doors after 3 seconds
    setTimeout(() => {
      closeDoors();
    }, 5000);
  }

  function openDoors() {
    leftDoor.style.width = '0';
    rightDoor.style.width = '0';
  }

  function closeDoors() {
    leftDoor.style.width = '37.5px';
    rightDoor.style.width = '37.5px';
  }
});
