class Node
    attr_acessor :value, :left, :right
    def initialize(value)
        @value = value
        @left = nil
        @right = nil
    end
end

class Tree
    def initialize(root)
        @root = root
    end

    def insert(value, current = @root)
        if value < current.value
        current.left.nil? ? current.left = Node.new(value) : insert(value, current.left)
        else
        current.right.nil? ? current.right = Node.new(value) : insert(value, current.right)
        end
    end
end

n = Node.new(1)

tree = Tree.new(n)
