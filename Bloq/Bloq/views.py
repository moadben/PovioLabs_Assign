from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import authenticate, login
from django.core.context_processors import csrf
from django.core.mail import send_mail
from forms import MyRegistrationForm


def index(request):
    c = {}
    c.update(csrf(request))    
    return render_to_response('Bloq/index.html', c)
    


def login(request):
    c = {}
    c.update(csrf(request))    
    return render_to_response('Bloq/login.html', c)
    
def auth_view(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = auth.authenticate(username=username, password=password)
    
    if user is not None:
        auth.login(request, user)
        return HttpResponseRedirect('/bloq/')
    else:
        return HttpResponseRedirect('/accounts/invalid')
    
def loggedin(request):
    return render_to_response('/bloq/', 
                              {'full_name': request.user.username})

def invalid_login(request):
    return render_to_response('Bloq/invalid_login.html')

def logout(request):
    auth.logout(request)
    return HttpResponseRedirect('/')

def register_user(request):
    if request.method == 'POST':
        form = MyRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/accounts/register_success')
        
    else:
        form = MyRegistrationForm()
    args = {}
    args.update(csrf(request))
    
    args['form'] = form
    
    return render_to_response('Bloq/register.html', args)



def register_success(request):
    return render_to_response('Bloq/register_success.html')
