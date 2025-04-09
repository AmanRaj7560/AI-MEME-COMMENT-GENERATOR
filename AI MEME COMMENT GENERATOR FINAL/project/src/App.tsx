import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, List, Users, X, RefreshCw } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [showTeamInfo, setShowTeamInfo] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const memeComments = [
    "When your code works on first try... and you don't know why. 🤯",
    "That moment when you fix a bug and 10 new ones appear! 😱",
    "Me: *Writes perfect code* Compiler: We don't do that here 😎",
    "Found a solution on StackOverflow from 2010... Still works! 🎯",
    "When the bug disappears as soon as you call your senior developer 🙈",
    "Code review day: *Sweating intensifies* 💦",
    "When you write documentation and actually understand it later 🎉",
    "git push --force: Because sometimes you just want to watch the world burn 🔥",
    "When your 'temporary' solution becomes a permanent feature 😅",
    "That feeling when your code works but you don't know how 🎲"
  ];

  const captions = [
    "Coding all night because bugs sleep during the day. 🐞💻",
    "My code doesn't work, I have no idea why. My code works, I have no idea why. 🤷‍♂️",
    "It's not a bug, it's an undocumented feature! ✨",
    "Keep calm and blame it on the compiler 🧘‍♂️",
    "Coffee.js not found: System Halted ☕",
    "Ctrl+S every 5 seconds because trust issues 💾",
    "Living life on the edge... of my IDE 🎸",
    "404: Sleep not found 😴",
    "Relationship status: Committed to master 💝",
    "sudo make me a sandwich 🥪"
  ];

  const classJokes = [
    "Teacher explaining with full passion... whole class secretly giggling… suddenly teacher turns — direct eye contact with me. Teacher: 'Where's your ID?' Me (panicking): 'Ma'am please, last time… I was just picking up my pen!' Teacher: 'Really?' Me (Oscar-worthy performance): 'Spare me this once, I swear… even my thoughts were taking notes!' 🙏😇📒✏️",
    "Professor: 'Why are you late?' Me: 'My code was compiling.' Professor: 'This is a history class.' Me: 'I have my priorities straight.' 📚💻",
    "Teacher: 'What's your excuse for sleeping in class?' Me: 'I was debugging in my dreams.' 😴🐛",
    "During online class: 'Your mic is muted' Me: 'I know, I'm just practicing my mime coding skills' 🎭",
    "Professor: 'Show your work' Me: *Opens Stack Overflow history* 'Here's my research paper' 📝",
    "Teacher: 'What's so funny?' Me: 'Nothing, just remembered a programming joke' Class: *collective groan* 😂",
    "In lab: 'Why is your program taking so long?' Me: 'It's not slow, it's building suspense!' ⏳"
  ];

  const codingJokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs! 🪲",
    "Why did the programmer quit his job? Because he didn't get arrays! 💼",
    "What's a programmer's favorite place? The foo bar! 🍺",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 = Dec 25! 🎃",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
    "Why do programmers hate nature? It has too many bugs! 🌿",
    "What's a programmer's favorite hangout spot? The dev bar! 🍻",
    "Why did the developer go broke? Because he used up all his cache! 💰",
    "What do you call a programmer from Finland? Nerdic! 🌍",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself! 😢"
  ];

  const bollywoodResponses = [
    "Kabhi Bug Kabhi Debug: A story of a developer's journey through code! 🎬",
    "Mere Paas Code Hai: The ultimate answer to every tech discussion! 💻",
    "Don't Debug Me Now: When you're in the coding zone! 🚫",
    "Pushpa, I Hate Runtime Errors: But coding must go on! 🔥",
    "Ek Compiler Ki Maut: The tale of a crashed system! 💔",
    "Baazigar: Sometimes you win, sometimes you learn... to code better! 🎭",
    "Dil To Pagal Hai... After seeing legacy code! ❤️",
    "Kuch Kuch Hota Hai... When code works without debugging! ✨",
    "Kabhi Khushi Kabhi Code: The life of a developer! 😊",
    "Kal Ho Naa Ho... Deadline toh aaj hai! ⏰",
    "Main Hoon Na... But first let me fix this bug! 🦸‍♂️",
    "Om Shanti Om... After finally fixing that production bug! 🙏",
    "3 Idiots of Programming: Ctrl, C, and V! 😂",
    "Dilwale Code Le Jayenge: The eternal promise of clean code! 💕",
    "Chennai Express: Runtime error coming through! 🚂",
    "Zindagi Na Milegi Dobara... So backup your code! 💾",
    "Yeh Jawaani Hai Deewani... For the latest JavaScript framework! 🌟",
    "Race 3: Because that's how many times we'll refactor this code! 🏃‍♂️"
  ];

  const motivationalQuotes = [
    "Keep coding like nobody's watching! 💻✨",
    "Debug like a boss, deploy like a king! 👑",
    "Every error is a step towards success! 🎯",
    "Code with passion, debug with patience! 🧘‍♂️",
    "Yesterday's bugs are today's features! 🦋",
    "The best error message is the one that never shows up! 🎉",
    "Your code is poetry in motion! 📝",
    "Think twice, code once! 💭",
    "Keep calm and code on! 🧘‍♀️",
    "In code we trust! 🙏"
  ];

  const debugStories = [
    "99 little bugs in the code, 99 bugs in the code, take one down, patch it around, 127 little bugs in the code... 🐛",
    "Dear Debug Log, today was another interesting day... 📝",
    "The bug was in line 1... of a 1000-line file! 😅",
    "Spent 4 hours debugging, found a missing semicolon! 😤",
    "It's not a bug, it's a feature in disguise! 🎭",
    "The bug: *exists* Me: I'm about to end this bug's whole career! 💪",
    "Bug fixed! Now to fix the bugs created by fixing that bug! 🔄",
    "Legend says the bug is still hiding in the code somewhere... 👻",
    "Plot twist: The bug was in the comments! 📚",
    "Dear future me, sorry about the bug I just fixed... kind of! 🙈"
  ];

  const coffeeMessages = [
    "Coffee.exe has stopped working... Time to restart developer.exe! ☕️",
    "Error 404: Coffee not found. Developer.exe stopped working! ⚠️",
    "Give me coffee and no one gets hurt! ☠️",
    "Blood type: Coffee Positive! 🩺",
    "Coffee: Because anger management is too expensive! 💰",
    "My coffee tolerance is directly proportional to my code quality! 📊",
    "Coffee: The primary requirement in the software development lifecycle! 📋",
    "Keep calm and drink coffee! 🧘‍♀️",
    "Coffee: Turning 'ugh' into 'yeah'! 🎉",
    "Coffee: Because coding without caffeine is like HTML without CSS! 🎨"
  ];

  const errorMessages = [
    "Error 404: Sleep not found... Must keep coding! 😴",
    "Error 418: I'm a teapot! ☕",
    "Error 500: Internal coffee shortage! 💀",
    "Error 402: Sleep required... Payment declined! 💳",
    "Error 451: Code unavailable for legal reasons! 👨‍⚖️",
    "Error 508: Infinite loop detected in coffee consumption! 🔄",
    "Error 429: Too many requests for coffee! ⚠️",
    "Error 503: Developer service unavailable... Need more coffee! 🛠️",
    "Error 409: Conflict between sleep and debugging! 😫",
    "Error 413: Payload too large... Can't handle this bug! 📦"
  ];

  const meetingScenarios = [
    "In a meeting: 'Can everyone see my screen?' Everyone: 'No' Me: *hasn't shared screen yet* 🤦‍♂️",
    "Meeting that could've been an email, Part 457! 📧",
    "'Let's take this offline' - The most popular lie in meetings! 🤥",
    "'You're on mute!' - The anthem of remote meetings! 🎤",
    "Sprint planning: Where 2-hour tasks become 2-week epics! ⏰",
    "Stand-up meeting entering hour 2... Still standing! 🧍‍♂️",
    "That moment when you join the wrong meeting but it's too awkward to leave! 😅",
    "'Quick sync' - The biggest oxymoron in tech! ⚡",
    "'Let's circle back' - Translation: Let's never speak of this again! 🔄",
    "The only thing more painful than meetings is scheduling them! 📅"
  ];

  const deadlineScenarios = [
    "Client: 'Can you add this small feature?' Me: *adds feature* Also me: *breaks entire application* 😅",
    "Deadline approaching... Panic mode activated! 🚨",
    "Client: 'It's just a small change' Reality: *Complete system rebuild required* 🏗️",
    "Me: 'I'll finish it tonight' Narrator: 'They did not finish it that night' 📚",
    "When the deadline is tomorrow but you haven't started yet! 😱",
    "Client: 'How long will it take?' Me: 'Yes.' 🤔",
    "Deadline extended! Time to procrastinate more efficiently! 🎯",
    "The project is 90% complete... The remaining 90% will take another week! 📊",
    "Due date? More like do date... as in do it now! ⏰",
    "The only deadline I meet is the one in my coffee cup! ☕"
  ];

  const commands = {
    '/memecomment': () => memeComments[Math.floor(Math.random() * memeComments.length)],
    '/caption': () => captions[Math.floor(Math.random() * captions.length)],
    '/classjoke': () => classJokes[Math.floor(Math.random() * classJokes.length)],
    '/joke': () => codingJokes[Math.floor(Math.random() * codingJokes.length)],
    '/bollywood': () => bollywoodResponses[Math.floor(Math.random() * bollywoodResponses.length)],
    '/motivation': () => motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)],
    '/debug': () => debugStories[Math.floor(Math.random() * debugStories.length)],
    '/coffee': () => coffeeMessages[Math.floor(Math.random() * coffeeMessages.length)],
    '/error': () => errorMessages[Math.floor(Math.random() * errorMessages.length)],
    '/meeting': () => meetingScenarios[Math.floor(Math.random() * meetingScenarios.length)],
    '/deadline': () => deadlineScenarios[Math.floor(Math.random() * deadlineScenarios.length)],
    '/cmdall': "Available commands:\n/memecomment - Get a coding success meme\n/caption - Get a coding lifestyle caption\n/classjoke - Get a classroom scene\n/joke - Get a coding joke\n/bollywood - Get a Bollywood coding crossover\n/motivation - Get a coding motivation\n/debug - Get a debugging story\n/coffee - Get a coffee break message\n/error - Get an error message\n/meeting - Get a meeting scenario\n/deadline - Get a client request scenario\n/cmdall - Show this list"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot typing delay (1 second)
    await new Promise(resolve => setTimeout(resolve, 1000));

    let botResponse: Message;
    const command = input.toLowerCase() as keyof typeof commands;
    if (commands[command]) {
      const response = typeof commands[command] === 'function' 
        ? commands[command]() 
        : commands[command];
      botResponse = {
        text: response,
        isUser: false
      };
    } else {
      botResponse = {
        text: "❌ Unknown command! Use /cmdall to see available options.",
        isUser: false
      };
    }

    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);
  };

  const handleNewChat = () => {
    setMessages([]);
    setInput('');
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col relative">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-lg">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <Bot size={32} className="text-blue-400" />
            <h1 className="text-2xl font-bold text-blue-400">AI Meme Comment Generator</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleNewChat}
              className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              title="Start a new chat"
            >
              <RefreshCw size={20} className="text-white" />
              <span>New Chat</span>
            </button>
            <button
              onClick={() => setShowTeamInfo(!showTeamInfo)}
              className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Users size={20} className="text-blue-400" />
              <span>Team Info</span>
            </button>
          </div>
        </div>
      </header>

      {/* Team Info Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          showTeamInfo ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-400">Team Members</h2>
            <button
              onClick={() => setShowTeamInfo(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Aman Raj</h3>
              <p className="text-gray-400">Reg No. 12318166</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Jay Anand</h3>
              <p className="text-gray-400">Reg No. 12303874</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Anshuman Raj</h3>
              <p className="text-gray-400">Reg No. 12310482</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isUser
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-100'
              }`}
            >
              {!message.isUser && (
                <Bot size={20} className="inline-block mr-2 text-blue-400" />
              )}
              <span className="whitespace-pre-wrap">{message.text}</span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-gray-100 rounded-lg p-3">
              <Bot size={20} className="inline-block mr-2 text-blue-400 animate-pulse" />
              <span>Typing...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-4 border-t border-gray-700"
      >
        <div className="max-w-3xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g., /cmdall)"
            className="flex-1 bg-gray-700 text-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send size={20} />
          </button>
          <button
            type="button"
            onClick={() => setInput('/cmdall')}
            className="bg-gray-700 text-gray-100 rounded-lg px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <List size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;