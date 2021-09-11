import os
from PIL import Image

filename = os.listdir(r'未处理图片')

for i in range(len(filename)):
    image = Image.open('未处理图片'+'\\'+str(filename[i]))
 
    # 调整图片大小(修改为固定比例)

    # 获取图片宽度
    image_width = image.size[0]   #常规手机壁纸高清图片比例为1200*1920，高度是宽度的1.6倍
    image_height = image_width * 1.6
    
    # 重新设置大小
    # 默认情况下，PIL使用Image.NEAREST过滤器进行大小调整，从而获得良好的性能，但质量很差。
    image = image.resize(( int(image_width), int(image_height) ), Image.ANTIALIAS)

    image.save('未使用图片'+'\\'+str(filename[i]))

    os.remove('未处理图片'+'\\'+str(filename[i])) #删除处理完的图片