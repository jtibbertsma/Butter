json.array! @boards do |board|
  json.partial! 'api/boards/board', board: board, show_all: false
end