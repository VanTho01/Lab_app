import bluetooth
from tkinter import *
from customtkinter import *
from PIL import Image
from PIL.ImageTk import PhotoImage

win = CTk()
win.geometry('1343x905')
win.title('demo')

name_sw = CTkLabel(win, corner_radius=6, text = 'Hệ thống điểm danh', font = ('Times new roman', 24), height=55, width=442, fg_color='#2CB2DC', text_color='black')
name_sw.place(x = 451, y = 17)

Nhap_ten_lop = CTkLabel(win, corner_radius=7, text = 'Nhập tên lớp', font = ('Times new roman', 20), height=56, width=183, fg_color='#2CB2DC', text_color='black')
Nhap_ten_lop.place(x=91, y=95)
ten_lop_entry = CTkEntry(win, corner_radius=6, font = ('Times new roman', 24), height=56, width=299, fg_color='white', text_color='black', placeholder_text='Example: 20222FE6058040')
ten_lop_entry.place(x = 317, y = 95)

Thoi_gian = CTkLabel(win, corner_radius=7, text = 'Thời gian', font = ('Times new roman', 20), height=56, width=183, fg_color='#2CB2DC', text_color='black')
Thoi_gian.place(x=734, y=95)
data_time = CTkTextbox(win, corner_radius=6, font = ('Times new roman', 24), height=56, width=299, fg_color='white', text_color='black')
data_time.place(x=960, y=95)

CTkLabel(win, corner_radius=7, text = '', height=511, width=1175, fg_color='white').place(x=91, y=356)

def scannDevice():
    number_device.delete("1.0", "end")
    near_device = bluetooth.discover_devices()
    if len(near_device) != 0:
        text = f'Phát hiện {len(near_device)} thiết bị!'
        number_device.insert(INSERT, text)
    else:
        text = f'Không phát hiện thiết bị nào!'
        number_device.insert(INSERT, text)
    return near_device

scan_device = CTkButton(win, corner_radius=7, text = 'Quét thiết bị', command=scannDevice, font = ('Times new roman', 20), height=56, width=183, fg_color='#2CB2DC', text_color='black', hover = True, hover_color='#7513F2')
scan_device.place(x=91, y=174)
number_device = CTkTextbox(win, corner_radius=6, font = ('Times new roman', 24), height=56, width=417, fg_color='white', text_color='black')
number_device.place(x=317, y=174)

def displayDevice():
    near_device = bluetooth.discover_devices()
    print(near_device)
    if len(near_device) != 0:
        for device, i in zip(near_device, range(len(near_device))):
            print(f'==== Thiết bị thứ {i+1}')
            print("--MAC Address: ", device[0])
            print("--Name of Device: ", device[1])
            print("--Id: ", device[2])
            img = CTkImage(light_image=Image.open(f'DataImage\{device[1]}.png'), size=(80, 79))
            image = CTkButton(win, corner_radius=6, text = '', image=img, width=80, height=79)
            student = CTkLabel(win, corner_radius=7, text = f'*MAC Address: {device[0]}  *Name: {device[1]}  *ID: {device[2]}', font=('Times new roman', 26), height=79, width=951, fg_color='#2CB2DC', text_color='black')
            if (i == 0):
                image.place(x=135, y=373)
                student.place(x=236, y=373)
            elif (i == 1):
                image.place(x=135, y=373+i*12)
                student.place(x=236, y=373+i*12)
            else:
                image.place(x=135, y=373+i/i*12)
                student.place(x=236, y=373+i/i*12)
display_device = CTkButton(win, corner_radius=7, command=displayDevice, text = ' Hiển thị \ndanh sách', font = ('Times new roman', 20), height=80, width=183, fg_color='#2CB2DC', text_color='black', hover = True, hover_color='#7513F2')
display_device.place(x=91, y=253)

xuat_pdf = CTkButton(win, corner_radius=7, command=displayDevice, text = 'Xuất PDF', font = ('Times new roman', 20), height=80, width=183, fg_color='#2CB2DC', text_color='black', hover = True, hover_color='#7513F2')
xuat_pdf.place(x=317, y=253)

display_device = CTkButton(win, corner_radius=7, command=exit, text = 'Thoát', font = ('Times new roman', 20), height=80, width=183, fg_color='#2CB2DC', text_color='black', hover = True, hover_color='#7513F2')
display_device.place(x=543, y=253)

win.mainloop()


