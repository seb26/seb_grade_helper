const EditDecisionList = require('./node_modules/edl-genius');
const Timecode = require('timecode-boss');

sample_edl = `TITLE: /Users/seb/Development/seb_cdl_utility/resources/resolve timeline - export as CDL (EDL).edl
FCM: NON-DROP FRAME

007  B001C007_220507_R6VL V     C        14:44:50:16 14:45:20:06 01:08:50:11 01:09:20:01  
COMMENT:*ASC_SOP (0.741799 0.741799 0.741799)(0.061014 0.061014 0.061014)(0.941620 0.941620 0.941620)
COMMENT:*ASC_SAT 1.000000

008  B001C008_220507_R6VL V     C        14:45:39:09 14:47:19:20 01:09:20:01 01:11:00:12  
COMMENT:*ASC_SOP (1.000000 1.000000 1.000000)(0.000000 0.000000 0.000000)(1.000000 1.000000 1.000000)
COMMENT:*ASC_SAT 1.000000

009  B001C009_220507_R6VL V     C        14:48:55:03 14:50:00:17 01:11:00:12 01:12:06:01  
COMMENT:*ASC_SOP (0.883593 0.883593 0.883593)(-0.015623 -0.015623 -0.015623)(0.924214 0.924214 0.924214)
COMMENT:*ASC_SAT 1.000000

010  B001C010_220507_R6VL V     C        14:50:29:00 15:02:08:11 01:12:06:01 01:23:45:12  
COMMENT:*ASC_SOP (0.883593 0.883593 0.883593)(-0.015623 -0.015623 -0.015623)(0.924214 0.924214 0.924214)
COMMENT:*ASC_SAT 1.000000


`;

sample_edl_path = '/Users/seb/Development/seb_cdl_utility/sample_files/resolve timeline - export as CDL (EDL).edl'

let edl = new EditDecisionList(25, 'cmx3600');
/*
edl.readFile(sample_edl_path).then( (edl) => {
    console.log( edl.events );
});
*/

edl.fromString( sample_edl ).then( (edl) => {
});



	
let clip_tc_start = new Timecode('10:16:20:01', 25);
let grade_tc_start = new Timecode('10:16:20:15', 25);
let clip_tc_end = new Timecode('10:18:29:19', 25);
let grade_tc_end = new Timecode('10:19:20:15', 25);

console.log( ( grade_tc_start >= clip_tc_start && grade_tc_start <= clip_tc_end ) );

console.log('xx!')