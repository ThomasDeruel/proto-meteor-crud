import {Template} from "meteor/templating";
import server from "../../../imports/db/server";
Template.HomeLayout.events(
    {
        'click #send'(event,template){
            const name_input = template.find('#name').value
            if(name_input){
                server.insert(
                    {
                        name:name_input
                    }
                )
                template.find('#name').value = "";
            } 
        },
        'click .modified'(event,template){
            FlowRouter.go('modified', {_id:this._id})
        },
        'click #deleted'(event,template){
            server.remove(this._id)
        }
    }
)
Template.HomeLayout.helpers(
    {
        list: server.find()
    }
)