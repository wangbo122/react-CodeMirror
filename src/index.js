import dva from 'dva';
import './index.less';
import {createBrowserHistory} from 'history'

const customHistory = createBrowserHistory();

// 1. Initialize
const app = dva({
    history:customHistory
});

// 2. Plugins
// app.use({});
 
// 3. Model
app.model(require('./models/app').default);
 
// 4. Router
app.router(require('./router').default);
 
// 5. Start
app.start('#root');
