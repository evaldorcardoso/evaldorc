<html lang="pt-br">
<head>
	<!--<meta http-equiv="refresh" content="5">-->
	<link href="bootstrap.min.css" rel="stylesheet" media="screen">	
		<style type="text/css">
      body{
         
      }

      /* ---------------------------
 * Callouts
 * ----------------------------
 */


.callout-mage {
	padding: 30px;
	background-color: #f0f0f0;
	color: #fff;
}

.callout-bubble {
	padding: 30px;
	background-color: #f0f0f0;
}

.callout-bubble h1,
h2,
h3,
h4 {
	color: #2C82C9;
}

.callout-bubble p 
{
	color: #FC6042;
}

.callout-block {
	background-color: #F5F3F4;
	border-left: 5px solid #a94545;
	border-right: 5px solid #a94545;
	padding: 15px;
}

      </style>
</head>
<body>
	<div class="container">
		<?php
			$numero = rand(1, 3);
			switch ($numero) {
				case '1':
					?>
					<div class="row">
						<div class="callout-bubble text-center fade-in-b">
							<h2>Lembrete - <b>Sistema NOVO</b> - DirectControl v.3.0
							<p>versão nova em desenvolvimento! Aguarde...</p>
						</div>
					</div>
					<?php
					break;
				case '2':
					?>
					<div class="row">
						<div class="callout-bubble text-center fade-in-b">
							<h2>Olá, hoje é dia - <b><?php echo date('d/m/y');?></b>
							<p><br><br></p>
						</div>
					</div>
					<?php
					break;
				case '3':
					?>
					<div class="row">
						<div class="callout-bubble text-center fade-in-b">
							<h2>Acesse o site da - <b>AcertSoft</b></h2>
							<p>www.acertsoft.com.br</p><br>
						</div>
					</div>
					<?php
					break;
				default:
					# code...
					break;
			}
		?>
	</div>
</body>
</html>