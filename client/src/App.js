import {BrowserRouter as Router,} from "react-router-dom";

import AppLayout from "./pages/AppLayout";

const App = () => {
    return <div>
        <Router>
            <AppLayout></AppLayout>
        </Router>
    </div>
   
}

export default App;