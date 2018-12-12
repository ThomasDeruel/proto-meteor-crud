import {Template} from "meteor/templating"
import server from "../../../imports/db/server";

Template.ModifiedLayout.helpers(
    {
        user(){
            const param_id = FlowRouter.getParam('_id')
            return server.findOne({_id:param_id})
        }
    }
)

Template.ModifiedLayout.events(
    {
        "click #modified"(event,template){
            const update = server.update(
                {
                    _id: FlowRouter.getParam('_id')
                },
                {
                    $set:{
                        name:template.find("#name").value,
                    }
                }
            )
            FlowRouter.go('home')   
        }
    }
)

