/**
 * @author wangbo
 * @description 封装编辑器AceEditor
 */
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sh";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
export default (props)=>{
	const {mode,height,width,name,placeholder,value,onChange,theme} = props;
	return (
	<AceEditor
	width={width||'500px'}
	height={height||'300px'}
    mode={mode||'python'}
    theme={theme||'monokai'}
    placeholder={placeholder || ''}
    onChange={onChange}
    name={name||'ace-editor'}
    value={value}
    editorProps={{ $blockScrolling: true }}
    fontSize='14px'
    showGutter = {true}
    highlightActiveLine = {true}
    showPrintMargin = {false}
    setOptions = {{
    enableBasicAutocompletion:true,
    enableLiveAutocompletion:true,
    enableSnippets:false
    }}
    // onLoad = {(editor)=>{
    	// console.log(editor)  //onLoad 的第一个参数是编辑器实例
    //}}
    // commands= {[{    //键盘指令
	//	name:'saveFile',
	//	bindKey:{win:'Ctrl-S',mac:'Command-S'}  
	//	exec:()=>{
	//		console.log('saveFile')
    //}
    //}]}
    //debounceChangePeriod = {500} // 防抖时间
    />)
}