


			$('.navi-tit').on('mouseenter focus', function() {
				$('.nav-depth').removeClass('on');
				$(this).children('.nav-depth').addClass('on');
			});
			$('.navi-tit').on('mouseleave blur', function() {
				$('.nav-depth').removeClass('on');
			})



			$('.nav-brands-tit.brands > li > a').on('mouseenter focus', function() {
				$('.nav-brands-tit.brands > li').removeClass('on');
				$(this).parent().addClass('on');
			});
			$('.nav-brands-sub').on('mouseenter focus', function() {
				$('.nav-brands-tit.brands > li').removeClass('on');
				$(this).parent().addClass('on');
			});

			

			$('.ham > a').on('click', function() {
				$('.m-header').addClass('on');
			})
			$('.close').on('click', function() {
				$('.m-header').removeClass('on');
				$('.m-nav-sub').removeClass('on');
				$('.m-nav-depth').removeClass('on');
			})
			
			
			
			$('.m-nav > ul > li > a').on('click', function() {
				const idx = $(this).parent().index();
				$(this).closest('.m-header').find('.m-nav-depth').eq(idx).addClass('on');
								
			});

			$('.m-nav-depth-sub > ul > li > a').on('click', function() {
				const idx = $(this).parent().index();
				$(this).closest('.m-nav-depth').find('.m-nav-sub').eq(idx).addClass('on');
								
			});



			$('.btn-nav-sub').on('click', function() {
				$('.m-nav-sub').removeClass('on');
				console.log('test')
			});
			$('.btn-hm').on('click focus', function() {
				$('.m-nav-depth').removeClass('on');
			})

		