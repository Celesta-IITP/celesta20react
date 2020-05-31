import React from "react";
import './stats.css';
import $ from "jquery";
const Stats=()=>{
    $.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

        var thisElement = $(this);
	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};
$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});
    return(
        <div>
        <div className="sectiontitle">
    <span className="headerLine"></span>
</div>
<div id="projectFacts" className="sectionclassName">
    <div className="fullWidth eight columns">
        <div className="projectFactsWrap ">
            <div className="item wow fadeInUpBig animated animated" data-number="12" style={{visibility:"visible"}}>
                <i className="fa fa-university"></i>
                <p id="number1" className="number">100+</p>
                <span></span>
                <p style={{fontSize:"25px"}}>COLLEGES!</p>
            </div>
            <div className="item wow fadeInUpBig animated animated" data-number="56" style={{visibility:"visible"}}>
                <i className="fa fa-users"></i>
                <p id="number2" className="number">5000+</p>
                <span></span>
                <p style={{fontSize:"25px"}}>FOOTFALL!</p>
            </div>
            <div className="item wow fadeInUpBig animated animated" data-number="358" style={{visibility:"visible"}}>
                <i className="fa fa-trophy"></i>
                <p id="number3" className="number">60+</p>
                <span></span>
                <p style={{fontSize:"25px"}}>EVENTS!</p>
            </div>
            <div className="item wow fadeInUpBig animated animated" data-number="246" style={{visibility:"visible"}}>
                <i className="fa fa-thumbs-up"></i>
                <p id="number4" className="number">50000+</p>
                <span></span>
                <p style={{fontSize:"25px"}}>OUTREACH!</p>
            </div>
        </div>
    </div>
</div>


        </div>
    )

}
export default Stats;