import { registerPlugin } from '@scullyio/scully';

export const myPlugin = 'myPlugin';

const myFunctionPlugin = async (html: string): Promise<string> => html;

const validator = async () => [];

registerPlugin('render', myPlugin, myFunctionPlugin, validator);
