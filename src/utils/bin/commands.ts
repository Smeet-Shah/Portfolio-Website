// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome to my site! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary about me!
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.repogit}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
there
aren't
any
yet
but 
soon!`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `i'm going to make it soon!`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about vscode? :)`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Get trolled...`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
███████╗███╗   ███╗███████╗███████╗████████╗███████╗    ██╗    ██╗███████╗██████╗ 
██╔════╝████╗ ████║██╔════╝██╔════╝╚══██╔══╝██╔════╝    ██║    ██║██╔════╝██╔══██╗
███████╗██╔████╔██║█████╗  █████╗     ██║   ███████╗    ██║ █╗ ██║█████╗  ██████╔╝
╚════██║██║╚██╔╝██║██╔══╝  ██╔══╝     ██║   ╚════██║    ██║███╗██║██╔══╝  ██╔══██╗
███████║██║ ╚═╝ ██║███████╗███████╗   ██║   ███████║    ╚███╔███╔╝███████╗██████╔╝
╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝   ╚═╝   ╚══════╝     ╚══╝╚══╝ ╚══════╝╚═════╝ 
                                                                                  
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
