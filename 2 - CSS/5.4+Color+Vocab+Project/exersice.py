def multi(my_list):
    num = 1
    for i in range(len(my_list)):
        if str(my_list[i]).isnumeric():
            num *= my_list[i]
    print(num)

    for elem in my_list:
        if str(elem).isnumeric():
            num *= elem
    print(num)


    
nums = [3,10,1,4,5,6]
multi(nums)


for i in range(1,len(nums)):
    if nums[i] > nums[i-1]:
        print(nums[i])

# for i in nums:
#     print(i)
