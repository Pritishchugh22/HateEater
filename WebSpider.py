import bs4
import requests
from bs4 import BeautifulSoup

def webSpider(url):
    #print("Part 1")
    #SSL_validation(url)
    #print("Part 2")
    #cookie_checker(url)
    print("Part 3")
    alt_checker(url)

def SSL_validation(url):
    #--------------------------URL verification of SSL certificate---------------------------#
    #all_links=[]
    
    validity_checker(url)
    source_code = requests.get(url)
    plain_text = source_code.text
    soup = BeautifulSoup(plain_text)
    parent = "False"
    if(url[4]=='s'):
        parent = "True"     
    print("The URL validation of parent URL for SSL certificate is :",parent)
    for link in soup.find_all('a'):
        href = link.get('href')
        #print(href)
        #all_links.append(href)
        valid = "False"         
        if(href[0]=='/'):
            print("URL validation of",href,"for SSL certificate is :",parent)    
        else:
            if(href[4]=='s'):
                valid = "True"
                validity_checker(href)                                                  # for the urls who are url verified are only checked for SSL certificate validification by sending their url to a website which searches and tells if the url is valid or not.
            print("URL validation of",href,"for SSL certificate is :",valid)                
    #print(all_links)                                                                   # to verify all the urls for SSL validity, the urls are stored in a list and by calling a for loop all the urls can be tested 

    

def validity_checker(url):  #--------------------------Validity of SSL certificate---------------------------#
    res = requests.get('https://sslcheck.liquidweb.com/?domain='+''.join(url))
    res_ = res.text
    #print(res_)
    soup_ = BeautifulSoup(res_, 'html.parser')
    #data1 = soup.find('ul')
    #for li in data1.find_all("li"):
    #    print(li.text, end=" ")

    list_items = soup_.find('li')
    list_items = soup_.find('li')
    my_list = [e.string for e in list_items]  # convert list_items to string
    cnt =0
    data1 = soup_.find('ul')
    for data1 in soup_.find_all('ul'):
        for li in data1.find_all("li"):
            cnt+=1
            my_list = [e.string for e in li] 
            if(cnt==5):
                #print(cnt,my_list)
                if_SSL_verify = my_list[1]
    #print(if_SSL_verify)
    if(if_SSL_verify=="is"):
        print("Validation of",url,"for validity of SSL certificate is : Valid")
    else:
        print("Validation of",url,"for validity of SSL certificate is : Not Valid")
   
def cookie_checker(url):
    session = requests.Session()
    response = session.get(url)
    dic = session.cookies.get_dict() 
    print('The cookies that are being used are: ')
    print(dic) 
    print('Total number of cookies being used is '+ str(len(dic)))
    # --------------- NOW TO VERIFY THE COOKIES, WE CAN SEE IF THE COOKIES MENTIONED BY THE WEBSITE MATCHES WITH THE COOKIES THAT ARE ACTUALLY BEING USED ------#
    # --------------- ACTUAL NUMBER OF cOOKIES BEING USED CAN BE SEEN BY CHECKING IN INSPECT -> APPLICATION -> COOKIES OR BY GOING TO THE LOCK SYMBOL TO THE LEFT OF URL -----#
    
def alt_checker(url):
    source_code = requests.get(url)
    plain_text = source_code.text
    soup = BeautifulSoup(plain_text)
    total =0
    cnt=0
    # ------ Method 1: By calculating total images and then finding images with alt text and subtracting them--------#
    print("Method 1")
    for img in soup.find_all('img'):
        total+=1    
    for img in soup.find_all('img', alt=True):
        cnt+=1
    print("Total number of images without ALT are : "+str(total-cnt))
    # ------ Method 2: by doing try and except to find the number of images without alt text--------#
    print("\nMethod 2")
    without_cnt = 0
    for img in soup.find_all('img'):
        try:
            alt = img["alt"]
        except Exception as e:
            without_cnt+=1
    if without_cnt==0:
        print("All the images in the URl have ALT text")
    else:
        print(str(without_cnt)+" number of images in the URl do not have ALT text")
    
webSpider('https://www.drlinkcheck.com/blog/how-to-find-non-https-links')