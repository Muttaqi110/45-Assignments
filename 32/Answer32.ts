const current_users: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

const new_users: string[] = ["Frank", "Alice", "Grace", "john", "BOb"];

for (let i = 0; i < new_users.length; i++) {

  const new_username = new_users[i];
  const lowerNewUsername = new_username.toLowerCase();
  let isUsernameAvailable = true;

  for (let j = 0; j < current_users.length; j++) {
    const current_username = current_users[j];
    if (lowerNewUsername === current_username.toLowerCase()) {
      isUsernameAvailable = false;
      break;
    }
  }

  if (isUsernameAvailable) {
    console.log(`Congratulations, the username "${new_username}" is available.`);
    current_users.push(new_username);
  } else {
    console.log(`Sorry, the username "${new_username}" is not available. Please choose a different one.`);
  }
}
