# 택스타일
택스타일은 HTML 태그에 `id`나 `class`를 지정하지 않고 스타일을 적용합니다. 이를 통해 문서가 디자인을 지정하느라 `id`나 `class`로 점칠되어 복잡해질 가능성을 없애고 간결함을 유지할 수 있습니다.

## 예시
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Page Title</title>
		<link rel="stylesheet" href="tagstyle.css">
	</head>
	<body>
		<header>
			<ul>
				<li><a href="#">Sample</a></li>
				<li><a href="#">Menu1</a></li>
				<li><a href="#">Menu2</a></li>
			</ul>
			<ul>
				<li><a href="#">Right</a></li>
				<li><a href="#">Menu1</a></li>
				<li><a href="#">Menu2</a></li>
			</ul>
		</header>
		<main>
			<h1>This is a Heading</h1>
			<p>
				This is a paragraph.
			</p>
			<form>
				<p>
					<label for="username">Username</label>
					<!-- input 태그의 id 값은 label을 위함 -->
					<input id="username" placeholder="Username">
				</p>
				<p>
					<label for="password">Password</label>
					<input type="password" id="password" placeholder="Password">
				</p>
				<p>
					<label for="email">E-mail</label>
					<input type="email" id="email" placeholder="E-mail">
				</p>
				<p>
					<input type="checkbox" id="checkbox">
					<label for="checkbox">Checkbox</label>
				</p>
				<p>
					<input type="submit">
				</p>
			</form>
		</main>
		<footer>
			&copy; Company 2017 
		</footer>
	</body>
</html>
```
![예시 이미지](https://raw.githubusercontent.com/Hanul/tagstyle/master/example1.png)

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)
