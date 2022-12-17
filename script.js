// A personality quiz

// This is an array of objects that stores the personality trait that is prompted to the user and the weight for each prompt. 
// If a personality trait is considered more introverted, it will have a negative weight.
// If a personlity trait is considered more extroverted, it will have a positive weight.

var prompts = [
{	
	prompt: 'Tôi thấy khó mà thoải mái được.', 
	weight: 1,
	class: 'group0'
},
{
	prompt: 'Tôi đã phản ứng thái quá khi có những sự việc xảy ra',
	weight: 1,
	class: 'group1'
},
{
	prompt: 'Tôi thấy mình đang suy nghĩ quá nhiều',
	weight: 1,
	class: 'group2'
},
{
	prompt: 'Tôi thấy bản thân dễ bị kích động',
	weight: 1,
	class: 'group3'
},
{
	prompt: 'Tôi thấy khó thư giãn được',
	weight: 1,
	class: 'group4'
},
{
	prompt: 'Tôi không chấp nhận được việc có cái gì đó xen vào cản trở việc tôi đang làm',
	weight: 1,
	class: 'group5'
},
{
	prompt: 'Tôi thấy mình dễ phật ý, tự ái',
	weight: 1,
	class: 'group6'
},
{
	prompt: 'Tôi bị khô miệng',
	weight: 1,
	class: 'group7'
},
{
	prompt: 'Tôi bị rối loạn nhịp thở (thở gấp, khó thở dù chẳng làm việc gì nặng)',
	weight: 1,
	class: 'group8'
},
{
	prompt: 'Tôi bị ra mồ hôi (chẳng hạn như mồ hôi tay...)',
	weight: 1,
	class: 'group9'
},
{
	prompt: 'Tôi lo lắng về những tình huống có thể khiến tôi hoảng sợ hoặc biến tôi thành trò cười',
	weight: 1,
	class: 'group10'
},
{
	prompt: 'Tôi thấy mình gần như hoảng loạn',
	weight: 1,
	class: 'group11'
},
{
	prompt: 'Tôi nghe thấy rõ tiếng nhịp tim dù chẳng làm việc gì cả (ví dụ, tiếng nhịp tim tăng, tiếng tim loạn nhịp)',
	weight: 1,
	class: 'group12'
},
{
	prompt: 'Tôi hay sợ vô cớ',
	weight: 1,
	class: 'group13'
},
{
	prompt: 'Tôi không thấy có chút cảm xúc tích cực nào',
	weight: 1,
	class: 'group14'
},
{
	prompt: 'Tôi thấy khó bắt tay vào công việc',
	weight: 1,
	class: 'group15'
},
{
	prompt: 'Tôi thấy mình chẳng có gì để mong đợi cả',
	weight: 1,
	class: 'group16'
},
{
	prompt: 'Tôi cảm thấy chán nản, thất vọng',
	weight: 1,
	class: 'group17'
},
{
	prompt: 'Tôi không thấy hăng hái với bất kỳ việc gì nữa',
	weight: 1,
	class: 'group18'
},
{
	prompt: 'Tôi cảm thấy mình chẳng đáng làm người',
	weight: 1,
	class: 'group19'
},
{
	prompt: 'Tôi thấy cuộc sống vô nghĩa',
	weight: 1,
	class: 'group20'
}

]

// This array stores all of the possible values and the weight associated with the value. 
// The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.
var prompt_values = [
{
	value: 'Hoàn toàn đúng', 
	class: 'btn-default btn-strongly-agree',
	weight: 3
},
{
	value: 'Đúng một phần',
	class: 'btn-default btn-agree',
	weight: 2,
}, 
// {
// 	value: 'Neutral', 
// 	class: 'btn-default',
// 	weight: 0
// },
{
	value: 'Không đúng một phần',
	class: 'btn-default btn-disagree',
	weight: 1
},
{ 
	value: 'Hoàn toàn không đúng',
	class: 'btn-default btn-strongly-disagree',
	weight: 0
}
]

// For each prompt, create a list item to be inserted in the list group
function createPromptItems() {

	for (var i = 0; i < prompts.length; i++) {
		var prompt_li = document.createElement('li');
		var prompt_p = document.createElement('p');
		var prompt_text = document.createTextNode(prompts[i].prompt);

		prompt_li.setAttribute('class', 'list-group-item prompt');
		prompt_p.appendChild(prompt_text);
		prompt_li.appendChild(prompt_p);

		document.getElementById('quiz').appendChild(prompt_li);
	}
}

// For each possible value, create a button for each to be inserted into each li of the quiz
// function createValueButtons() {
	
// 	for (var li_index = 0; li_index < prompts.length; li_index++) {
// 		for (var i = 0; i < prompt_values.length; i++) {
// 			var val_button = document.createElement('button');
// 			var val_text = document.createTextNode(prompt_values[i].value);

// 			val_button.setAttribute('class', 'value-btn btn ' + prompt_values[i].class);
// 			val_button.appendChild(val_text);

// 			document.getElementsByClassName('prompt')[li_index].appendChild(val_button);
// 		}
// 	}
// }
function createValueButtons() {
	for (var li_index = 0; li_index < prompts.length; li_index++) {
		var group = document.createElement('div');
		group.className = 'btn-group btn-group-justified';

		for (var i = 0; i < prompt_values.length; i++) {
			var btn_group = document.createElement('div');
			btn_group.className = 'btn-group';

			var button = document.createElement('button');
			var button_text = document.createTextNode(prompt_values[i].value);
			button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
			button.appendChild(button_text);

			btn_group.appendChild(button);
			group.appendChild(btn_group);

			document.getElementsByClassName('prompt')[li_index].appendChild(group);
		}
	}
}

createPromptItems();
createValueButtons();

// Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
// Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
var total = 0;

// Get the weight associated to group number
function findPromptWeight(prompts, group) {
	var weight = 0;

	for (var i = 0; i < prompts.length; i++) {
		if (prompts[i].class === group) {
			weight = prompts[i].weight;
		}
	}

	return weight;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
	var weight = 0;

	for (var i = 0; i < values.length; i++) {
		if (values[i].value === value) {
			weight = values[i].weight;
		}
	}

	return weight;
}

// When user clicks a value to agree/disagree with the prompt, display to the user what they selected
$('.value-btn').mousedown(function () {
	var classList = $(this).attr('class');
	// console.log(classList);
	var classArr = classList.split(" ");
	// console.log(classArr);
	var this_group = classArr[0];
	// console.log(this_group);

	// If button is already selected, de-select it when clicked and subtract any previously added values to the total
	// Otherwise, de-select any selected buttons in group and select the one just clicked
	// And subtract deselected weighted value and add the newly selected weighted value to the total
	if($(this).hasClass('active')) {
		$(this).removeClass('active');
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	} else {
		// $('[class='thisgroup).prop('checked', false);
		total -= (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
		// console.log($('.'+this_group+'.active').text());
		$('.'+this_group).removeClass('active');

		// console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
		// $(this).prop('checked', true);
		$(this).addClass('active');
		total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
	}

	console.log(total);
})



$('#submit-btn').click(function () {
	// After clicking submit, add up the totals from answers
	// For each group, find the value that is active
	$('.results').removeClass('hide');
	$('.results').addClass('show');
	
	if(total < 15) {
		// document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
		// console.log(document.getElementById('intro-bar').style.width);
		// document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';
		document.getElementById('results').innerHTML = '<table style="width: 100%;" border="1" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 26.5244%;" valign="top" width="151"><p align="center"><strong>Mức độ</strong></p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center"><strong>Lo âu</strong></p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center"><strong>Trầm cảm</strong></p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center"><strong>Stress</strong></p></td></tr><tr id="6" style="background-color:#deb887"><td style="width: 26.5244%;" valign="top" width="151"><p>Bình thường</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">0 - 7</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">0 - 9</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">0 - 14</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Nhẹ</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">8 - 9</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">10 - 13</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">15 - 18</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Vừa</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">10 - 14</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">14 - 20</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">19 - 25</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Nặng</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">15 - 19</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">21 - 27</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">26 - 33</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Rất nặng</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">≥20</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">≥28</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">≥34</p></td></tr></tbody></table>\
		<b>Kết quả: Happy(.63), Fear(.22) + (<15 Total Lo âu, Trầm cảm, Stress) điểm = Bình thường</b><br><br>\
		<img src="https://res.cloudinary.com/dzaignjpq/image/upload/v1670686238/B%C3%ACnh_th%C6%B0%E1%BB%9Dng_gs0wul.png" alt="" width="500" height="300"><br><br>\
		Bạn hoàn toàn có một tâm lý bình thường, không có dấu hiệu lo âu, trầm cảm. Tiếp tục có một lối sống lành mạnh, chơi thể thao, sinh hoạt điều độ sẽ giúp bạn có một tâm lý vui vẻ, tự tin.'
	} if(total >=15) {
		document.getElementById('results').innerHTML = '<table style="width: 100%;" border="1" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 26.5244%;" valign="top" width="151"><p align="center"><strong>Mức độ</strong></p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center"><strong>Lo âu</strong></p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center"><strong>Trầm cảm</strong></p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center"><strong>Stress</strong></p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Bình thường</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">0 - 7</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">0 - 9</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">0 - 14</p></td></tr><tr id="5" style="background-color:#deb887"><td style="width: 26.5244%;" valign="top" width="151"><p>Nhẹ</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">8 - 9</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">10 - 13</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">15 - 18</p></td></tr><tr id="6" style="background-color: #f0b364;"><td style="width: 26.5244%;" valign="top" width="151"><p>Vừa</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">10 - 14</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">14 - 20</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">19 - 25</p></td></tr><tr id="2"><td style="width: 26.5244%;" valign="top" width="151"><p>Nặng</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">15 - 19</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">21 - 27</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">26 - 33</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Rất nặng</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">≥20</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">≥28</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">≥34</p></td></tr></tbody></table>\
		<b>Kết quả: Supprise(.25), Neutral(.46) + (>=15 Total Lo âu, Trầm cảm, Stress) điểm = Nhẹ - Vừa</b><br><br>\
		<img src="https://res.cloudinary.com/dzaignjpq/image/upload/v1670686238/Nh%E1%BA%B9_V%E1%BB%ABa_kmcrvx.png" alt="" width="500" height="300"><br><br>\
		Ở mức độ này, bạn hoàn toàn có thể điều chỉnh lại tâm lý của mình bằng các việc tập luyện thiền, yoga, kết hợp thư giản bằng các việc bạn cảm thấy thích như đi dạo hoặc nghe nhạc. Tránh và hạn chế các công việc có cường độ làm việc cao, ngồi lâu, hoặc môi trường có tiếng ồn lớn.'
	} if(total > 25) {
		document.getElementById('results').innerHTML = '<table style="width: 100%;" border="1" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 26.5244%;" valign="top" width="151"><p align="center"><strong>Mức độ</strong></p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center"><strong>Lo âu</strong></p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center"><strong>Trầm cảm</strong></p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center"><strong>Stress</strong></p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Bình thường</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">0 - 7</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">0 - 9</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">0 - 14</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Nhẹ</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">8 - 9</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">10 - 13</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">15 - 18</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Vừa</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">10 - 14</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">14 - 20</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">19 - 25</p></td></tr><tr id="2" style="background-color:#deb887"><td style="width: 26.5244%;" valign="top" width="151"><p>Nặng</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">15 - 19</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">21 - 27</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">26 - 33</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Rất nặng</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">≥20</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">≥28</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">≥34</p></td></tr></tbody></table>\
		<b>Kết quả: Fear(.24), Neutral(.37) + (>25 Total Lo âu, Trầm cảm, Stress) điểm = Nặng</b><br><br>\
		<img src="https://res.cloudinary.com/dzaignjpq/image/upload/v1670685652/N%E1%BA%B7ng_a0orrt.png" alt="" width="500" height="300"><br><br>\
		Nếu bạn thuộc trường hợp này và các dấu hiệu trầm cảm không quá nghiêm trọng, bác sĩ có thể chỉ định liệu pháp tâm lý.. Bác sĩ sẽ chẩn đoán mức độ cụ thể hơn và định hướng phương án điều trị an toàn nhất. Có thể dùng thuốc hoặc không (tùy theo mức độ của bệnh nhân).'
	}
	if(total >= 34) {
		document.getElementById('results').innerHTML = '<table style="width: 100%;" border="1" cellspacing="0" cellpadding="0"><tbody><tr><td style="width: 26.5244%;" valign="top" width="151"><p align="center"><strong>Mức độ</strong></p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center"><strong>Lo âu</strong></p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center"><strong>Trầm cảm</strong></p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center"><strong>Stress</strong></p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Bình thường</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">0 - 7</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">0 - 9</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">0 - 14</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Nhẹ</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">8 - 9</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">10 - 13</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">15 - 18</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Vừa</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">10 - 14</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">14 - 20</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">19 - 25</p></td></tr><tr><td style="width: 26.5244%;" valign="top" width="151"><p>Nặng</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">15 - 19</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">21 - 27</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">26 - 33</p></td></tr><tr id="3" style="background-color:#deb887"><td style="width: 26.5244%;" valign="top" width="151"><p>Rất nặng</p></td><td style="width: 19.502%;" valign="top" width="156"><p align="center">≥20</p></td><td style="width: 20.9103%;" valign="top" width="156"><p align="center">≥28</p></td><td style="width: 20.411%;" valign="top" width="144"><p align="center">≥34</p></td></tr></tbody></table>\
		<b>Kết quả: Fear(.23), Neutral(.41) + (>34 Total Lo âu, Trầm cảm, Stress) điểm = Rất nặng</b><br><br>\
		<img src="https://res.cloudinary.com/dzaignjpq/image/upload/v1670684897/R%E1%BA%A5t_n%E1%BA%B7ng_v2elwk.png" alt="" width="500" height="300"><br><br>\
		Ở mức độ này, bạn nên thăm khám và tư vấn với bác sĩ chuyên khoa Tâm bệnh càng sớm càng tốt. Bác sĩ sẽ chẩn đoán mức độ cụ thể hơn và định hướng phương án điều trị an toàn nhất. Có thể dùng thuốc hoặc không (tùy theo mức độ của bệnh nhân).'
	}

	// Hide the quiz after they submit their results
	$('#quiz').addClass('hide');
	$('#submit-btn').addClass('hide');
	$('#retake-btn').removeClass('hide');
})

// Refresh the screen to show a new quiz if they click the retake quiz button
$('#retake-btn').click(function () {
	$('#quiz').removeClass('hide');
	$('#submit-btn').removeClass('hide');
	$('#retake-btn').addClass('hide');

	$('.results').addClass('hide');
	$('.results').removeClass('show');
})