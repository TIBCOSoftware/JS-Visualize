visualize({
    auth: {
        name: "joeuser",
        password: "joeuser",
        organization: "organization_1"
    }
}, function (v) {
    var inputControls = v.inputControls({
        resource: "/organizations/organization_1/adhoc/topics/Cascading_multi_select_topic",
        container: "#containerInput",
        error: function (err) {
            console.error(err);
        }
    });
});