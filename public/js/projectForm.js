  $(document).ready(function(){
        $(".project").click(function(){
            $(".phoneMe").hide(1500);
            $(".leaveComment").hide(1500);
            $(".letsDiscuss").text("Please answer the following questions so I can determine the right solution for you.");
            $(".projectIdeaHeading").text("Let's Go!");
            $(".projectIdea").animate({
                width: "95%",
                marginRight: "2.5%",
                marginLeft: "2.5%"
            },1500, "swing");
            $(".project").fadeOut(1500);
            $(".projectForm").show(500);
            $("#ajax-project").show(1000);
            $(".form-control1").animate({
                width: "70%",
                marginRight: "15%",
                marginLeft: "15%"
            });
        });
    });