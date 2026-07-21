const commandTarget = document.querySelector("#typed-command");
const commands = [
  "cat profile.json",
  "ls ./projects",
  "open resume.md",
  "git log --oneline",
];

let commandIndex = 0;

function rotateCommand() {
  if (!commandTarget) return;
  commandIndex = (commandIndex + 1) % commands.length;
  commandTarget.textContent = commands[commandIndex];
}

window.setInterval(rotateCommand, 2200);
