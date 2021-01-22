import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';
import "./BBB.css"

const languages = [
  'javascript',
  'java',
  'python',
  'xml',
  'ruby',
  'sass',
  'markdown',
  'mysql',
  'json',
  'html',
  'handlebars',
  'golang',
  'csharp',
  'elixir',
  'typescript',
  'css',
];

const themes = [
  'monokai',
  'github',
  'tomorrow',
  'kuroir',
  'twilight',
  'xcode',
  'textmate',
  'solarized_dark',
  'solarized_light',
  'terminal',
];

languages.forEach((lang) => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

themes.forEach((theme) => require(`ace-builds/src-noconflict/theme-${theme}`));
/*eslint-disable no-alert, no-console */
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/ext-language_tools';

const defaultValue = `function onClick(e) {
  console.log(e.target.value);
}`;

class BBB extends Component {
  onLoad() {
    console.log("i've loaded");
  }
  onChange(newValue) {
    console.log('change', newValue);
    this.setState({
      value: newValue,
    });
  }

  onSelectionChange(newValue, event) {
    console.log('select-change', newValue);
    console.log('select-change-event', event);
  }

  onCursorChange(newValue, event) {
    console.log('cursor-change', newValue);
    console.log('cursor-change-event', event);
  }

  onValidate(annotations) {
    console.log('onValidate', annotations);
  }

  setPlaceholder(e) {
    this.setState({
      placeholder: e.target.value,
    });
  }
  setTheme(e) {
    this.setState({
      theme: e.target.value,
    });
  }
  setMode(e) {
    this.setState({
      mode: e.target.value,
    });
  }
  setBoolean(name, value) {
    this.setState({
      [name]: value,
    });
  }
  setFontSize(e) {
    this.setState({
      fontSize: parseInt(e.target.value, 10),
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue,
      placeholder: 'Placeholder Text',
      theme: 'monokai',
      mode: 'javascript',
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      fontSize: 14,
      showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      enableSnippets: false,
      showLineNumbers: true,
    };
    this.setPlaceholder = this.setPlaceholder.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setMode = this.setMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
    this.setBoolean = this.setBoolean.bind(this);
  }
  render() {
    return (
      <div className="columns" style={{padding:'200px'}}>
        <div className="column">
          <div className="field">
            <label>语言:</label>
            <p className="control">
              <span className="select">
                <select name="mode" onChange={this.setMode} value={this.state.mode}>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>编辑器风格:</label>
            <p className="control">
              <span className="select">
                <select name="Theme" onChange={this.setTheme} value={this.state.theme}>
                  {themes.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>字体大小:</label>
            <p className="control">
              <span className="select">
                <select name="Font Size" onChange={this.setFontSize} value={this.state.fontSize}>
                  {[14, 16, 18, 20, 24, 28, 32, 40].map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>

          <div className="field">
            <label>默认文字:</label>
            <p className="control">
              <input
                className="input"
                type="text"
                onChange={this.setPlaceholder}
                value={this.state.placeholder}
              />
            </p>
          </div>

          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableBasicAutocompletion}
                  onChange={(e) => this.setBoolean('enableBasicAutocompletion', e.target.checked)}
                />
                启用基本自动完成功能
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableLiveAutocompletion}
                  onChange={(e) => this.setBoolean('enableLiveAutocompletion', e.target.checked)}
                />
                启用实时自动完成功能 （比如：智能代码提示）
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showGutter}
                  onChange={(e) => this.setBoolean('showGutter', e.target.checked)}
                />
                显示装订线
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showPrintMargin}
                  onChange={(e) => this.setBoolean('showPrintMargin', e.target.checked)}
                />
                显示打印页边距
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.highlightActiveLine}
                  onChange={(e) => this.setBoolean('highlightActiveLine', e.target.checked)}
                />
                突出显示光标所在行
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.enableSnippets}
                  onChange={(e) => this.setBoolean('enableSnippets', e.target.checked)}
                />
                启用摘要
              </label>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={this.state.showLineNumbers}
                  onChange={(e) => this.setBoolean('showLineNumbers', e.target.checked)}
                />
                显示行号
              </label>
            </p>
          </div>
        </div>
        <div className="examples column">
          <h2>编辑代码</h2>
          <AceEditor
            placeholder={this.state.placeholder}
            mode={this.state.mode}
            theme={this.state.theme}
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.onChange}
            onSelectionChange={this.onSelectionChange}
            onCursorChange={this.onCursorChange}
            onValidate={this.onValidate}
            value={this.state.value}
            fontSize={this.state.fontSize}
            showPrintMargin={this.state.showPrintMargin}
            showGutter={this.state.showGutter}
            highlightActiveLine={this.state.highlightActiveLine}
            setOptions={{
              useWorker: false,
              enableBasicAutocompletion: this.state.enableBasicAutocompletion,
              enableLiveAutocompletion: this.state.enableLiveAutocompletion,
              enableSnippets: this.state.enableSnippets,
              showLineNumbers: this.state.showLineNumbers,
              tabSize: 2,
            }}
          />
        </div>
        <div className="column">
          <h2>运行结果</h2>
          <AceEditor
            mode="jsx"
            theme="monokai"
            readOnly={true}
            value={`这里展示运行结果`}
          />
        </div>
      </div>
    );
  }
}

export default BBB;
