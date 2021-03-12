=begin

Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count of them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you should return:

["-------------", "Unicorn!"]

=end

# My Solution
def bald(x)
  message = case x.chars.count('/')
            when 0 then 'Clean!'
            when 1 then 'Unicorn!'
            when 2 then 'Homer!'
            when 3..5 then 'Careless!'
            else 'Hobo!'
            end
  ["#{'-' * x.size}", message]
end

# Better Solution
def bald(x)
  y =
    case x.count('/')
      when 0    then "Clean!"
      when 1    then "Unicorn!"
      when 2    then "Homer!"
      when 3..5 then "Careless!"
      else           "Hobo!"
    end

  [x.gsub(/\//, '-'), y]
end

# Another Solution
def bald(x)
  [x.tr(?/, ?-), %w(Clean! Unicorn! Homer! Careless! Careless! Careless!)[x.count ?/] || 'Hobo!']
end
