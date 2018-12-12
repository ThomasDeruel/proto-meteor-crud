import HomeLayout from "../client/layouts/HomeLayout/HomeLayout.html";
import ModifiedLayout from "../client/layouts/ModifiedLayout/ModifiedLayout.html";

import '../client/layouts//HomeLayout/HomeLayout.js';
import '../client/layouts/ModifiedLayout/ModifiedLayout.js';

FlowRouter.route("/",
    {
        name: "home",
        action(){
            BlazeLayout.render('HomeLayout')
        }
    }
)

FlowRouter.route("/:_id",
    {
        name: "modified",
        action(params){
            console.log("Params:", params);
            BlazeLayout.render("ModifiedLayout")
        }
    }
)