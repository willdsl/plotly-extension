import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette, InputDialog, showDialog } from '@jupyterlab/apputils';

/**
 * Initialization data for the plotly-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'plotly-extension',
  description: 'plotly take home assignment',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension plotly-extension is activated!');
    console.log('ICommandPalette:', palette);

    const command: string = 'plotly-extension:open-dialog';
    app.commands.addCommand(command, {
      label: 'Open dialog',
      execute: async () => {
        const input = await InputDialog.getText({
          title: 'Please enter text input',
          okLabel: 'OK',
          placeholder: 'Placeholder text',
        });

        if (input.button.accept) {
          showDialog({
            title: 'You\'ve entered the following:',
            body: input.value?.toString(),
          });
        }
      }
    });

    palette.addItem({ command, category: 'PlotlyAssessment' });
  }
};

export default plugin;
