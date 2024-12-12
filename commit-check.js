//Этот файл проверяет, соответствует ли сообщение коммита требуемому формату:
//Пример корректного коммита: ASTONJS-1 [feat]: add new feature
//Если формат неверный, коммит будет заблокирован, а в консоли появится сообщение с подсказкой.

//ASTONJS - название проекта, далее указывается номер урока.
//[feat/fix/chore] - тип коммита. Указывается какой-то один. 
//feat - новая фича. fix - какие-либо изменения, внесение правок. chore - общие изменения, не затрагивающие логику кодовой базы.
//Далее после двоеточия идёт сообщение коммита на английском языке.

const fs = require('fs');

// Чтение сообщения коммита
const commitMsgPath = process.argv[2];
const commitMsg = fs.readFileSync(commitMsgPath, 'utf8').trim();

// Регулярное выражение для проверки формата
const commitPattern = /^ASTONJS-\d+ \[(feat|fix|chore)\]: .+/;

if (!commitPattern.test(commitMsg)) {
  console.error(`
Invalid commit message format.

Expected format: ASTONJS-<lesson number> [feat/fix/chore]: <message>

Example:
ASTONJS-1 [feat]: add new feature
  `);
  process.exit(1);
}

