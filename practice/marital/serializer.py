from rest_framework import serializers , fields
from .models import Marital,Religion, Dukcapil

 
class MaritalSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Marital
        fields = (
            'id',
            'marital_status_desc'
        )

class ReligionSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Religion
        fields = (
            'id',
            'religion_name',
            'usr_crt',
            'dtm_crt',
            'usr_upd',
            'dtm_upd'
        )
class DukcapilSerializer(serializers.ModelSerializer):
    class Meta :
        # religion = ReligionSerializer(read_only = True, many = True)
        model = Dukcapil
        fields = (
            'NIK',
            'name',
            'maidenName',
            'birthDate',
            'religion',
            'maritalStatus'
        )