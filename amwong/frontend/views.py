from django.shortcuts import render


# Create your views here.
def main(request):
    return render(request, 'frontend/base.html')


def films(request):
    return render(request, 'frontend/films.html')


def gallery(request):
    return render(request, 'frontend/gallery.html')
