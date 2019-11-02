import path from 'path';
import test from 'ava';
import sao from 'sao';
import saoFile from '../saofile.js';

const generator = path.join(__dirname, '..');

test('Defaults', async t => {
  const descriptionMock = { description: 'The description remains the same.' };
  const stream = await sao.mock({ generator }, descriptionMock);

  t.snapshot(stream.answers, 'Default Choices')
  t.snapshot(stream.fileList, 'Generated files');
});

test('Features overview', async t => {
  for (const prompt of saoFile.prompts()) {
    if (Array.isArray(prompt.choices)) {
      t.snapshot(prompt.choices, `${prompt.name}`);
    }
  }
});
