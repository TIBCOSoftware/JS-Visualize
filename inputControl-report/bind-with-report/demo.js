visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {

		var resourceUri = "/public/Samples/Reports/Cascading_Report_2_Updated";
    
    var report = v.report({
    		resource: resourceUri, 
        container: "#report",
        events: {
            reportCompleted: function(status) {
                success: document.getElementById("ic").style.display = "none";
            }
        },
    });
    
     var inputControls = v.inputControls({
    		resource: resourceUri,
    		container: "#ic",
        events: {
        	change: function(params, error){
          	if (!error){
            	report.params(params).run();  
            } 
          }
        }
    });
});
