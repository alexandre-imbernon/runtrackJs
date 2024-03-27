$('button').click(function() {
	shuffleElements( $('img') );
});

function shuffleElements($elements) {
	let i, index1, index2, temp_val;
	let count = $elements.length;
	let $parent = $elements.parent();
	let shuffled_array = [];

	for (i = 0; i < count; i++) {
		shuffled_array.push(i);
	}

	for (i = 0; i < count; i++) {
		index1 = (Math.random() * count) | 0;
		index2 = (Math.random() * count) | 0;

		temp_val = shuffled_array[index1];
		shuffled_array[index1] = shuffled_array[index2];
		shuffled_array[index2] = temp_val;
	}

	$elements.detach();
	for (i = 0; i < count; i++) {
		$parent.append( $elements.eq(shuffled_array[i]) );
	}
}

let dragged;
$(document).on("drag", function () {});

$(document).on("dragstart", function (event) {
  dragged = event.target;
  $(event.target).css('opacity', 0.5);
});

$(document).on("dragend", function (event) {
  $(event.target).css('opacity', '');
});

$(document).on("dragover", function (event) {
  event.preventDefault();
});

$(document).on("dragenter", function (event) {
  if ($(event.target).hasClass("dropzone")) {
    $(event.target).css('background', 'green');
  }
});

$(document).on("dragleave", function (event) {
  if ($(event.target).hasClass("dropzone")) {
    $(event.target).css('background', '');
  }
});

$(document).on("drop", function (event) {
  event.preventDefault();
  if ($(event.target).hasClass("dropzone")) {
    $(event.target).css('background', '');
    $(dragged).detach().appendTo($(event.target));
  }
});

$(function() {
  let dropzone = $('.dropzone');
  dropzone.on('dragstart', 'img', function(e) {
      dragged = this;
  });

  dropzone.on('dragenter', 'img', function(e) {
      if (dragged !== this) { 
          $(this).addClass('hover'); 
      }
  });

  dropzone.on('dragleave', 'img', function(e) {
      $(this).removeClass('hover'); 
  });

  dropzone.on('dragend', 'img', function(e) {
      let hovered = $('.hover');
      if (hovered.length) { 
          $(dragged).detach().insertBefore(hovered); 
      }
      hovered.removeClass('hover');
  });
});
