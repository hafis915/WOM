from django.db import models

# Create your models here.
class Marital(models.Model):
    marital_status_desc = models.CharField(max_length=50)

class Religion(models.Model):
    religion_name = models.CharField(max_length=50)
    usr_crt = models.CharField(max_length=50)
    dtm_crt = models.DateField(auto_now_add= True)
    usr_upd = models.CharField(max_length=50)
    dtm_upd = models.DateField(auto_now=True)

class Dukcapil(models.Model) :
    NIK = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    maidenName = models.CharField(max_length=100)
    birthDate = models.DateField(auto_now=False, auto_now_add=False)
    religion = models.ForeignKey(Religion, on_delete=models.CASCADE)
    maritalStatus = models.ForeignKey(Marital, on_delete = models.CASCADE)

