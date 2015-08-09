json.extract! board, :id, :title

if show_all
  json.lists do
    json.array! board.lists do |list|
      json.id list.id
      json.title list.title
      json.ord list.ord

      # json.array! list.cards do |card|
      #   json.partial! 'api/cards/card', card: card, show_all: false
      # end
    end
  end
end