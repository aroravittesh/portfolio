import {
    personalData,
    getWhatIDo,
    getProjectDetails,
    skills,
    education,
    extras,
    contact
  } from './cliUtils';
  
  export const cliCommands = [
    'help',
    'about-me',
    'whatido',
    'projects',
    'project <name>',
    'skills',
    'education',
    'extracurriculars',
    'contact',
    'get-resume',
    'get-github',
    'get-linkedin',
    'get-leetcode',
    'clear'
  ];
  
  export function runCommand(input: string): string[] {
    const [cmd, ...args] = input.trim().split(' ');
    const argStr = args.join(' ').toLowerCase();
  
    switch (cmd.toLowerCase()) {
      case 'help':
        return cliCommands.map(c => `- ${c}`);
      case 'about-me':
        return personalData();
      case 'whatido':
        return getWhatIDo().split('\n');
      case 'projects':
        return ['Try: project carbonmitra, project echoes, or project cookie'];
      case 'project':
        return getProjectDetails(argStr);
      case 'skills':
        return skills();
      case 'education':
        return education();
      case 'extracurriculars':
        return extras();
      case 'contact':
        return contact();
      case 'get-resume':
        return ['📄 Resume: https://drive.google.com/file/d/1aEStvpm_6jMkDD93337aIXuc4T5xmNoh/view?usp=sharing'];
      case 'get-github':
        return ['🔗 GitHub: https://github.com/aroravittesh'];
      case 'get-linkedin':
        return ['🔗 LinkedIn: https://linkedin.com/in/vittesh-arora'];
      case 'get-leetcode':
        return ['🧠 LeetCode: https://leetcode.com/aroravittesh'];
      case 'clear':
        return [];
      default:
        return ['❌ Unknown command. Type "help" for list.'];
    }
  }
  