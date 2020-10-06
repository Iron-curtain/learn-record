//js 动态若类型语言
// twoSum undefined => function
// go 类型约束 现代的c语言
func twoSum(nums []int,
	target int)[]int{
		//0(n2) => 0(n)
		// 2,7,9
		// for
		// 9-2-7
		// {7:0,}
		// json 7
		h :=make(map[int]int)
		//js for python
		for i,value :=range nums{
			if wanted,ok :=h[value];ok{
				return[]int{wanted,i}
			}
			else{
				h[target=value] = i
			}
		}
		return nil;
	}