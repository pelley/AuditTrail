({
    getAudits : function(component) {
        var action = component.get("c.findAudits");
        action.setParams({
            id: component.get("v.recordId"),
        });
        action.setCallback(this, function(data){
            component.set("v.auditList", data.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})
