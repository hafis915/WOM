from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status



from marital.serializer import MaritalSerializer, ReligionSerializer, DukcapilSerializer
from rest_framework.decorators import api_view

from .models import Marital, Religion, Dukcapil

def frontEnd(request):
    return render(request, 'index.html', {})

# Marital Status
@api_view(['GET', 'POST', 'DELETE'])
def maritalList(request):
    # GET list of tutorials, POST a new tutorial, DELETE all 
    if request.method == 'GET':
        marital = Marital.objects.all()
        serializer = MaritalSerializer(marital, many=True)
        return JsonResponse(serializer.data, safe=False)


    elif request.method == 'POST':
        marital_data = JSONParser().parse(request)
        marital_serializer = MaritalSerializer(data=marital_data)
        print(marital_data, '<<<<<<<<<<<<<<<<<<<< ini data')
        if marital_serializer.is_valid():
            marital_serializer.save()
            return JsonResponse(marital_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(marital_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
@api_view(['GET', 'PUT', 'DELETE'])
def maritalDetail(request, pk):
    # find tutorial by pk (id)
    marital = Marital.objects.get(pk=pk)

    if request.method == 'GET': 
        marital_serializer = MaritalSerializer(marital) 
        return JsonResponse(marital_serializer.data)
    elif request.method == 'PUT': 
        marital_data = JSONParser().parse(request) 
        marital_serializer = MaritalSerializer(marital, data=marital_data) 
        if marital_serializer.is_valid(): 
            marital_serializer.save() 
            return JsonResponse(marital_serializer.data) 
        return JsonResponse(marital_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    elif request.method == 'DELETE': 
        marital.delete() 
        return JsonResponse({'message': 'Marital Status was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

# Religions
@api_view(['GET','POST'])
def religions(request):
    if request.method == 'GET':
        religions = Religion.objects.all()
        serializer = ReligionSerializer(religions, many = True)
        return JsonResponse(serializer.data, safe = False)

    elif request.method == 'POST':
        religionData = JSONParser().parse(request)
        religionSerializers = ReligionSerializer(data = religionData)
        if religionSerializers.is_valid():
            religionSerializers.save()
            return JsonResponse(religionSerializers.data, status = status.HTTP_201_CREATED)
        return JsonResponse(religionSerializers.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def religion(request, pk):
    # find tutorial by pk (id)
    religion = Religion.objects.get(pk=pk)

    if request.method == 'GET': 
        religion_serializer = ReligionSerializer(religion) 
        return JsonResponse(religion_serializer.data)
    elif request.method == 'PUT': 
        religion_data = JSONParser().parse(request) 
        religion_serializer = ReligionSerializer(religion, data=religion_data) 
        if religion_serializer.is_valid(): 
            religion_serializer.save() 
            return JsonResponse(religion_serializer.data) 
        return JsonResponse(religion_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    elif request.method == 'DELETE': 
        religion.delete() 
        return JsonResponse({'message': 'religion Status was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        

# Dukcapil
@api_view(['GET', 'POST'])
def dukcapils(request):
    if request.method == 'GET':
        dukcapils = Dukcapil.objects.all()
        dukcapilsSerializer = DukcapilSerializer(dukcapils, many = True)
        return JsonResponse(dukcapilsSerializer.data, safe=False)
    elif request.method == 'POST':
        dukcapilData = JSONParser().parse(request)
        print(dukcapilData)
        dukcapilDataSerializer = DukcapilSerializer(data = dukcapilData)
        if dukcapilDataSerializer.is_valid():
            dukcapilDataSerializer.save()
            return JsonResponse(dukcapilDataSerializer.data, status= status.HTTP_201_CREATED)
        return JsonResponse(dukcapilDataSerializer.errors, status = status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def dukcapil(request, pk ):
    dukcapil = Dukcapil.objects.get(pk = pk)


    if request.method == 'GET':
        dukcapilSerializer = DukcapilSerializer(dukcapil)
        return JsonResponse(dukcapilSerializer.data, safe=False)
    elif request.method == 'PUT': 
        dukcapil_data = JSONParser().parse(request) 
        dukcapil_serializer = DukcapilSerializer(dukcapil, data=dukcapil_data) 
        if dukcapil_serializer.is_valid(): 
            dukcapil_serializer.save() 
            return JsonResponse(dukcapil_serializer.data) 
        return JsonResponse(dukcapil_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    elif request.method == 'DELETE': 
        dukcapil.delete() 
        return JsonResponse({'message': 'dukcapil data  was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        