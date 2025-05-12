export function getRandomName() {
    const firstNames = [
      "Aarav", "Vivaan", "Aditya", "Krishna", "Arjun", "Sai", "Rohan", "Kabir", "Anaya", "Diya", "Ishita", "Meera"
    ];
  
    const lastNames = [
      "Sharma", "Verma", "Naidu", "Reddy", "Patel", "Chatterjee", "Kapoor", "Singh", "Yadav", "Iyer", "Bose", "Jain"
    ];
  
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    return `${randomFirst} ${randomLast}`;
  }
  
 export function getRandomChatMessage() {
    const messages = [
      "Hi, how are you?",
      "What's the latest update?",
      "I love this video!",
      "Can anyone help me with this?",
      "Where are you watching from?",
      "This is so cool!",
      "Lol 😂",
      "Great explanation!",
      "Thanks for the info!",
      "I'm learning a lot!",
      "Can you share the link?",
      "This part is confusing...",
      "Subscribed just now!",
      "Please slow down a bit.",
      "Good vibes only!",
      "Anyone else here from India?"
    ];
  
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    return randomMsg;
  }
  