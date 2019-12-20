class User:

	def __init__(self, first_name, last_name, birth_day, mail, login_attempts):
		self.first_name = first_name
		self.last_name = last_name
		self.birth_day = birth_day
		self.mail = mail
		self.login_attempts = login_attempts

	def describe_user(self):
		print("Information about you", self.first_name, self.last_name)
		print("Your birthday is", self.birth_day, "und your mail is", self.mail)

	def greet_user(self):
		print("Well come to us!", self.last_name, self.first_name)

	def increment_login_attempts(self):
		self.login_attempts += 1
		print("Increment login attempts ", str(self.login_attempts))

	def reset_login_attempts(self):
		self.login_attempts = 0
		print("Reset login atempts ", str(self.login_attempts))

new_user = User("Bulat", "Khudainazarov", "070200", "my_mail", 1)
new_user.describe_user()
new_user.greet_user()
print("Your login attempts is ", new_user.login_attempts)
new_user.increment_login_attempts()
new_user.reset_login_attempts()

print("\n")

new_user = User("Wille", "Chordl", "020102", "willes_mail", 2)
new_user.describe_user()
new_user.greet_user()
print("Your login attempts is ", new_user.login_attempts)
new_user.increment_login_attempts()
new_user.reset_login_attempts()
print("\n")
new_user = User("Alina", "Valieva", "021201", "Aliva_mail", 5)
new_user.describe_user()
new_user.greet_user()
print("Your login attempts is ", new_user.login_attempts)
new_user.increment_login_attempts()
new_user.reset_login_attempts()